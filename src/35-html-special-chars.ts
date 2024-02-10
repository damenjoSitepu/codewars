export function htmlspecialchars(formData: string): string {
  if (!formData) return "";

  let newFormData: string = "";
  for (let i = 0; i < formData.length; i++) {
    switch (formData[i]) {
      case "<":
        newFormData += "&lt;";
        break;
      case ">":
        newFormData += "&gt;";
        break;
      case "\"":
        newFormData += "&quot;";
        break;
      case "&":
        newFormData += "&amp;";
        break;
      default:
        newFormData += String(formData[i]);
        break;
    }
  }

  return newFormData;
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));