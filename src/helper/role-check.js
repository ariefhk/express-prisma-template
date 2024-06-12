export const ROLE = {
  IS_ADMIN: ["ADMIN"],
  IS_ALL_ROLE: ["ADMIN", "USER"],
};

export const roleCheck = (roles, role) => {
  return roles.includes(role);
};
