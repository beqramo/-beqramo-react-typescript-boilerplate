import styled, { css } from 'styled-components';

export const LoginPageStyled = styled.form`
  .top-content {
    .content__image-container {
      img {
        object-fit: contain;
      }
    }
    .content__email-and-user {
      .user {
        .user__btn-use-different {
        }
      }
      .email {
        margin-right: 1.6rem;
      }
    }
    .content__password {
      .password__forgot {
      }
    }
  }
  .line-loader {
  }
  .content__submit-container {
    .checkbox {
      p {
      }
    }
    .btn {
    }
  }
`;

type ToggleNewUserStyledPropsType = {
  $useNewUser: boolean;
};

export const ToggleNewUserStyled = styled.div<ToggleNewUserStyledPropsType>`
  flex: 2;
  .user {
    .user__btn-use-different {
    }
  }
  .email {
  }

  ${({ $useNewUser }) =>
    $useNewUser &&
    css`
      .user {
      }
      .email {
      }
    `}
`;
