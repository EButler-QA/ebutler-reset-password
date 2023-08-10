export const isMatch = (pass: string, rePass: string) => {
  return pass === rePass;
};

export const handleIconClick = (url: string) => () => {
  // Redirect to Facebook when the icon is clicked
  window.location.href = url;
};

export const handleDialogClick = (event: any) => {
  event.stopPropagation();
};

export const homePageLink = "https://home.e-butler.com/index.php";

export const whiteLogo =
  "https://home.e-butler.com/website-assets/images/whiteLogo.png";
