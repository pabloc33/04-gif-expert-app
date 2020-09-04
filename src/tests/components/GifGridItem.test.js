import React from "react";
import { GifGridItem } from "../../components/GifGridItem";
const { shallow } = require("enzyme");

describe("Pruebas en <GifGridItem />", () => {
  const title = "Un titulo";
  const url = "https://loacalhost/algo.jpg";
  const wrappper = shallow(<GifGridItem title={title} url={url} />);
  test("debe de mostrar el componente correctamente ", () => {
    expect(wrappper).toMatchSnapshot();
  });

  test("debe de tener un párrafo con el title", () => {
    const p = wrappper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual al url y alt de los props ", () => {
    const img = wrappper.find("img");
    //console.log(img.props().src);
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test("debe de tener animate__fadeIn", () => {
    const div = wrappper.find("div");
    const className = div.props().className;
    //console.log(div.props().className);
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
