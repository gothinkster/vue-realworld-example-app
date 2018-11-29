import { actions } from "../../../src/store/article.module";
import { FETCH_ARTICLE } from "../../../src/store/actions.type";

jest.mock("vue", () => {
  return {
    axios: {
      get: jest.fn().mockImplementation(async articleSlug => {
        if (articleSlug.includes("8371b051-cffc-4ff0-887c-2c477615a28e")) {
          return {
            data: {
              article: {
                author: {},
                title: "Lorem ipsum dolor sit amet",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed cursus nisl. Morbi pulvinar nisl urna, tincidunt mattis tortor sollicitudin eget. Nulla viverra justo quis.",
                body:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum efficitur justo, nec aliquam quam rutrum in. Pellentesque vulputate augue quis vulputate finibus. Phasellus auctor semper sapien sit amet interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas placerat auctor metus. Integer blandit lacinia volutpat.",
                tagList: ["lorem", "ipsum", "javascript", "vue"]
              }
            }
          };
        }
        return "A not mocked up response occured";
      })
    }
  };
});

describe("Vuex Article Module", () => {
  it("should commit the previous article if it is given", async () => {
    const commitFunction = jest.fn();
    const context = { commit: commitFunction };
    const articleSlug = "8371b051-cffc-4ff0-887c-2c477615a28e";
    const prevArticle = {
      author: {},
      title: "Aye up, she's a reight bobby dazzler",
      description:
        "Yer flummoxed. Fair t' middlin, this is. Off f'r a sup down t'pub, to'neet. Ee bye ecky thump!",
      body:
        "Tha's better bi careful, lass - yer on a Scarborough warning! Tha meks a better door than a winder. Do I 'eckers like, You're in luck m'boy! Am proper knackered, aye I am that is I say.",
      tagList: ["aye", "ipsum", "javascript", "vue"]
    };
    await actions[FETCH_ARTICLE](context, articleSlug, prevArticle);
    expect(commitFunction.mock.calls[0][0]).toBe("setArticle");
    expect(commitFunction.mock.calls[0][1]).toBe(prevArticle);
  });

  it("should return the data of the api call when calling the function", async () => {
    const context = { commit: () => {} };
    const articleSlug = "8371b051-cffc-4ff0-887c-2c477615a28e";
    const prevArticle = undefined;
    const actionCall = await actions[FETCH_ARTICLE](
      context,
      articleSlug,
      prevArticle
    );
    expect(actionCall).toMatchSnapshot();
  });
});
