import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { getDocumentBySlug, getDocuments } from '../lib/documents';

import ContentLayout from '../components/content-layout';
import Markdown from '../components/markdown';
import Head from 'next/head';

type PageProps = MarkdownDocument & {
  contents: MarkdownDocument[];
  workshop: string;
  workshops: string[];
};

export default ({ content, meta, contents, workshop }: PageProps) => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, [content]);

  return (
    <ContentLayout>
      <Head>
        <title>{meta.title} — React && TypeScript — Frontend Masters</title>
      </Head>
      <header>
        <h1>{meta.title}</h1>
      </header>
      <Markdown>{content}</Markdown>
    </ContentLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const documents = await getDocuments();

  for (const document of documents) {
    paths.push({
      params: { slug: `${document.slug}.md` },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  const post = await getDocumentBySlug(slug);

  return {
    props: { ...post },
  };
};
