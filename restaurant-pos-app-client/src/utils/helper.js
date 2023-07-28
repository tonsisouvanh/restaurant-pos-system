export const getFont = (lang) => {
    let font = "";
    switch (lang) {
      case "la":
        font = "font-notosanslao";
        break;
      case "vn":
        font = "font-vietnampro";
        break;
      default:
        font = "sans-serif";
        break;
    }
    return font;
  };