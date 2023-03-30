import { Meta } from "@/seo";
import { Main, Section } from "@/_ui";
import { Header, About, Grid, Item, Footer } from "@/_components";
import { data } from "@/store";

export default function _() {
  return (
    <>
      <Meta />

      <Main>
        <Header />
        <Section>
          <About />
          <Grid>
            {data.map((item) => (
              <Item item={item} />
            ))}
          </Grid>
        </Section>
        <Footer />
      </Main>
    </>
  );
}
