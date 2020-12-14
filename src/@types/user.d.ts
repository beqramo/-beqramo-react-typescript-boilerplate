type RegisterResponseType = {
  data: {
    user: UserObjectType;
    access_token?: string;
  };
};

type UserObjectType = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  updated_at: string;
  created_at: string;
  id: number;
  email_verified_at?: null | string;
  deleted_at: string | null;
};

type UserRolesResponseType = {
  roles: UserRoleType[];
};

type UserRoleType = {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
};

type InviteUsersFormType = {
  company_id: string;
  people: InviteUserFormType[];
};

type InviteUserFormType = {
  first_name: string;
  last_name: string;
  email: string;
  type: string;
};

type AddUserResponseObjectType = {
  message: string;
};
