import styled from '@emotion/styled';

export const DetailWrapper = styled.div`
    position: relative;
    width: calc(100vw - 16px);
    height: calc(100vh - 40px);
    min-width: 960px;
    display: flex;

    .slide-bar-wrapper {
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        flex-direction: row;
        // width: 320px;
    
        h1 {
            margin: 0;
            font-size: 16px;
        }
        .left {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    }
    .slides {
        border: 1px dashed rgb(229, 234, 242);
    }
    .reveal .sl-block {
        display: block;
        position: absolute;
        z-index: auto;
        min-width: 1px;
        min-height: 1px;
        pointer-events: none;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .reveal .slides>section.present, .reveal .slides>section>section.present {
        top: 0px !important;
        height: 100%;
    }
    .custom-text {
        overflow: hidden;
        white-space: nowrap;
        word-wrap: break-word;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        text-overflow: ellipsis;
        height: calc(100% - 2px);
        border-radius: 2px;
        border: 1px solid #86909c;
        width: 100%;
    }
    .reveal {
        img,
        video {
            width: 90%;
            height: 90%;
        },
        pre {
            height: 90%;
        }
    }
    &.preview-wrapper {
        .slides {
            border: 0 !important;
        }
        .custom-text {
            border: 0 !important;
        }
    }
    &.edit-wrapper {
        .reveal .sl-block {
            pointer-events: auto;
        }
        .custom-text {
            user-select: none;
        }
    }
    .reveal .slide-number {
        left: 8px;
        right: 0px;
        max-width: 30px;
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
    .action-btn-wrapper {
        position: fixed;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        z-index: 999;
        div {
            margin-bottom: 8px;
        }
    }
    .action-btn {
        background: rgba(47,47,51,0.4);
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
    }
`

export const StyledTitle = styled.h2`
  font-size: 24px;     
  font-weight: bold;   
  color: #333;       
  margin: 0 0 10px 0;   
  display: flex;      
  align-items: center; 
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  width: auto; 
  max-width: 600px;
  background: white; 
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border-radius: 8px;
  z-index: 1000; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: stretch; 

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -48%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  animation: fadeIn 0.3s ease-out forwards;
`;

export const SideBarWrapper = styled.div`
    width: 160px;
    border-right: 1px solid rgb(229, 234, 242);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgb(229, 234, 242);
    padding: 8px;
    justify-content: space-between;

    .sideBarItem {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
        cursor: pointer;
        border-radius: 4px;
        &:hover {
            background-color: rgb(229, 234, 242);
        }
    }
`

export const StyleTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
`
export const LabelTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
    // margin-bottom: 8px;
`
export const FormRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`
export const ELeWrapper = styled.div`
    border: 1px solid transparent;
    cursor: pointer;
    &:hover,
    &:focus,
    &.active {
        border-color: var(--color-primary-light-4);

        .custom-text {
            border-color: transparent;
        }
    }

`
export const ThumbnailContainer = styled.div`
    width: 100%; 
    height: 200px; 
    cursor: pointer;
    margin-top: 16px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    overflow: hidden; 
    background-color: white;
    position: relative; 
    .empty {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666; // 字体颜色
        font-style: italic;
    }
`;

export const EmptyThumbnail = styled.div`
  width: 100%;
  height: 100px; 
  background-color: #f0f0f0;
  color: #666;
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-style: italic;
  border: 1px dashed #ccc; 
  border-radius: 4px;
  margin-top: 8px; 
  font-size: 14px; 
`;

export const ThumbnailImage = styled.img`
    max-width: 100%; 
    max-height: 100%; 
    object-fit: contain; 
`;
