export interface User {
  id: number;
  username: string;
  displayName?: string | null;
  isAdmin: boolean;
  isApproved?: boolean;
  departmentId?: number | null;
}
