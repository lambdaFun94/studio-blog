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
import { Image, Link } from "@yext/pages/components";
import MainLayout from "../components/layouts/MainLayout";
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

const Home = ({ __meta, relativePrefixToRoot, document }: TemplateRenderProps) => {
  const { c_coverPhoto, c_featuredBlogs } = document;
  console.log(relativePrefixToRoot);

  return (
    <MainLayout templateData={{__meta, document}} root={relativePrefixToRoot}>
      <div className="p-2 md:p-8 max-w-7xl mx-auto">
        {c_coverPhoto && (
          <div className="w-full aspect-square md:aspect-[16/9]">
            <Image
              image={c_coverPhoto}
              className="h-full object-cover object-center rounded-xl"
            />
          </div>
        )}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Featured Articles
          </h2>
          <div className="flex flex-col justify-center gap-10">
            {c_featuredBlogs?.map((blog) => (
              <article
                key={blog.id}
                className="relative isolate flex flex-col gap-2 lg:flex-row"
              >
                {blog && (
                  <div className="relative aspect-[16/9] md:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      image={blog.c_coverPhoto}
                      className="absolute inset-0 rounded-xl bg-gray-50 object-cover"
                      style={{height: "100%"}}
                    />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">
                      {formatDate(blog.datePosted)}
                    </span>
                  </div>
                  <div className="group relative">
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
    </MainLayout>
  );
};

export default Home;
