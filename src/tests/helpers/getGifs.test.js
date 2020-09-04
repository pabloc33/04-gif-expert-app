import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fecth", () => {
  test("debe de traer 10 elementos ", async () => {
    const gifs = await getGifs("One Punch");
    //console.log(gifs.lenght);

    expect(gifs.length).toBe(10);
  });

  test("debe de traer 10 elementos ", async () => {
    const gifs = await getGifs("");
    //console.log(gifs.lenght);

    expect(gifs.length).toBe(0);
  });
});
