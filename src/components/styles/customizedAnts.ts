import { css } from 'styled-components';

// prettier-ignore
const customizedAnts = css`
  *.ant-typography, .ant-typography * {
    margin-bottom:0;
  }

  button.ant-btn {
    display: flex;
    align-items: center;
    flex-direction: row;
    box-shadow: none;
    border: none;
    border-radius: 0;
    outline: none !important;
    padding:0.25rem 0.95rem;
    &.ant-btn-icon-only{
      padding: 2.4px 0;

    }
  }
  
  button[ant-click-animating-without-extra-node]:after {
      -webkit-animation: none !important;
      -moz-animation: none !important;
      -o-animation: none !important;
      -ms-animation: none !important;
      animation: none !important;
    }
    .ant-input-borderless, .ant-input-borderless:hover{
    }

  .ant-divider.ant-divider-horizontal{
    border-top: 1px solid #E3EBF3;
  }

  .ant-picker-dropdown.ant-picker-dropdown-range{
    .ant-picker-range-wrapper.ant-picker-date-range-wrapper{
      .ant-picker-panel-container{
        border-radius:6px;
        button{
          &:hover{
            color: ${({theme}) => theme.colors.primaryColor} !important;
          }
        }
        .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner, 
        .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner{
          background-color: ${({theme}) => theme.colors.primaryColor} !important;
         
        }
        .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before{
          border: 1px solid ${({theme}) => theme.colors.primaryColor} !important;
        }
        .ant-picker-cell-in-view.ant-picker-cell-in-range::before{
          background-color: ${({theme}) => theme.colors.primaryColor}33 !important;
        }

        .ant-picker-cell.ant-picker-cell-in-view{
          &.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before,
          &.ant-picker-cell-range-end:not(.ant-picker-cell-range-start-single)::before{
            background-color: ${({theme}) => theme.colors.primaryColor}33 !important;
          }
          &.ant-picker-cell-selected > div{
            background-color: ${({theme}) => theme.colors.primaryColor} !important;
          }
        
        }
        .ant-picker-ranges .ant-picker-preset > .ant-tag-blue{
          background-color: #fff !important;
          border: 1px solid ${({theme}) => theme.colors.primaryColor} !important;
          color:black;
        }
      }
    }
  }

`

export default customizedAnts;
