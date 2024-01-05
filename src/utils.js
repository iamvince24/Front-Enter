function setRedirectLink(address, id, idname) {
  if (id !== null) {
    const contentUrl = `${window.location.origin}/${address}.html`;
    const contentId = id;
    // const contentParams = new URLSearchParams({
    //   ${idname}: JSON.stringify(contentId),
    // });
    const contentParams = new URLSearchParams();
    if (idname !== null) {
      contentParams.append(idname, JSON.stringify(contentId));
    }
    return `${contentUrl}?${contentParams.toString()}`;
  } else {
    const contentUrl = `${window.location.origin}/${address}.html`;
    return `${contentUrl}`;
  }
}

const stopPropagationHandler = (event) => {
  event.stopPropagation();
};

// alert
const alertCard = document.querySelector(".alert");
const alertCardTitle = document.querySelector(".alert-title");
const alertCardContent = document.querySelector(".alert-content");

function alertMessage(errorCode, message) {
  if (errorCode.includes("auth")) {
    errorCode = "Error";
    switch (errorCode) {
      case "auth/invalid-email":
        message = "電子郵件格式錯誤";
        break;
      case "auth/email-already-exists":
        message = "信箱已被註冊";
        break;
      case "auth/email-already-in-use":
        message = "信箱已被註冊";
        break;
      case "auth/invalid-password":
        message = "密碼最少需要六個字符";
        break;
      case "auth/weak-password":
        message = "密碼最少需要六個字符";
        break;
      case "auth/invalid-credential":
        message = "密碼錯誤";
        break;
      default:
        message = message ? message : "請檢查輸入格式";
        break;
    }
  }

  alertCardTitle.innerHTML = errorCode;
  alertCardContent.innerHTML = message;
  alertCard.style.display = "block";
  setTimeout(function () {
    alertCard.style.display = "none";
  }, 10000);
}

export { setRedirectLink, stopPropagationHandler, alertMessage };
