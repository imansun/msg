import { Avatar } from "@/components/ui";
import { colorFromText } from "@/utils/colorFromText";

export function Usage() {
  const color = colorFromText("امیرحسین فدایی");

  return (
    <div>
      <Avatar initialColor={color} name="امیرحسین فدایی" />
    </div>
  );
}
