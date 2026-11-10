import PageIntro from "../components/PageIntro";
import ArticleList from "../components/ArticleList";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { articles, mediumUrl } from "../data/site";

function Blog() {
  return (
    <>
      <PageIntro eyebrow="Blog" title="Writing on" accent="frontend engineering.">
        I share insights on frontend engineering, scalable architecture, performance
        optimization, and practical development strategies.
      </PageIntro>

      <section className="shell mt-14">
        <ArticleList articles={articles} />

        <Reveal className="mt-12 flex justify-center">
          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Icon name="medium" size={18} />
            View all articles on Medium
          </a>
        </Reveal>
      </section>
    </>
  );
}

export default Blog;
