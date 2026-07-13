export async function detectLocalIp(): Promise<string> {
  return new Promise((resolve) => {
    try {
      const pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel("");
      pc.createOffer()
        .then((offer) => pc.setLocalDescription(offer))
        .catch(() => resolve(""));

      const timeout = setTimeout(() => {
        pc.close();
        resolve("");
      }, 3000);

      pc.onicecandidate = (event) => {
        if (!event.candidate) return;
        const cand = event.candidate.candidate;
        const match = cand.match(
          /([0-9]{1,3}(\.[0-9]{1,3}){3})/,
        );
        if (match) {
          clearTimeout(timeout);
          pc.close();
          resolve(match[1]);
        }
      };

      pc.onicegatheringstatechange = () => {
        if (pc.iceGatheringState === "complete") {
          clearTimeout(timeout);
          pc.close();
          resolve("");
        }
      };
    } catch {
      resolve("");
    }
  });
}
