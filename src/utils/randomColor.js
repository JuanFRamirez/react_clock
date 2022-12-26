const randomColor = () => {
  let color = [
    {
      name: "palette1",
      bg: { color1: "#2980B9", color2: "#6DD5FA", color3: "#FFFFFF" },
      textColor: { border: "black", fill: "white" },
    },
    {
      name: "palette2",
      bg: {
        color1: "#FDC830",
        color2: "#F37335",
      },
      textColor: { border: "black", fill: "white" },
    },
    {
      name: "palette3",
      bg: {
        color1: "#03001e",
        color2: "#7303c0",
        color3: "#ec38bc",
      },
      textColor: { border: "black", fill: "white" },
    },
    {
      name: "palette4",
      bg: {
        color1: "#40E0D0",
        color2: "#FF8C00",
        color3: "#FF0080",
      },
      textColor: { border: "black", fill: "white" },
    },
    {
      name: "palette5",
      bg: {
        color1: "#ee0979",
        color2: "#ff6a00",
      },
      textColor: { border: "black", fill: "white" },
    },
  ];
  return color[Math.floor(Math.random() * color.length)];
};

export { randomColor };
