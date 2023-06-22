import * as React from "react";
import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateConfig,
} from "@yext/pages";
import { Image } from "@yext/pages/components";
import Main from "../components/layouts/Main";
import Container from "../components/Container";
import { formatDate } from "../utils/formatDate";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    fields: [
      "id",
      "name",
      "c_coverPhoto",
      "c_heading",
      "c_subHeading",
      "slug",
      "c_featuredBlogs.id",
      "c_featuredBlogs.name",
      "c_featuredBlogs.slug",
      "c_featuredBlogs.c_coverPhoto",
      "c_featuredBlogs.c_description",
      "c_featuredBlogs.datePosted",
    ],
    filter: {
      entityTypes: ["ce_homePage"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Home = ({ document }: TemplateRenderProps) => {
  const { c_coverPhoto, c_heading, c_subHeading, c_featuredBlogs } = document;

  return (
    <Main>
      <div className="p-2 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8">
          <h1 className="font-bold tracking-tight text-5xl xl:text-8xl">
            {c_heading}
          </h1>
          <p className="mt-4 text-l md:text-xl">{c_subHeading}</p>
        </div>
        {c_coverPhoto && (
          <div className="h-96 w-full sm:h-64 md:h-[500px] lg:h-[1000px]">
            <Image
              image={c_coverPhoto}
              className="max-h-full h-full w-full object-cover object-center"
            />
          </div>
        )}
        <div className="mt-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {c_featuredBlogs?.map((blog) => (
              <article
                key={blog.id}
                className="relative isolate flex flex-col gap-2 lg:flex-row"
              >
                {blog && (
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      image={blog.c_coverPhoto}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">
                      {formatDate(blog.datePosted)}
                    </span>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={blog.slug}>
                        <span className="absolute inset-0" />
                        {blog.name}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {blog.c_description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Home;
