import { GetStaticProps } from 'next';
import Head from 'next/head';
import ContentLayout from '../components/content-layout';
import Markdown from '../components/markdown';
import { getDocumentBySlug } from '../lib/documents';

export default ({ content }: MarkdownDocument) => {
  return (
    <ContentLayout>
      <Head>
        <title>React && TypeScript — Frontend Masters</title>
      </Head>
      <header>
        <h1>Overview</h1>
      </header>
      <Markdown>{content}</Markdown>
    </ContentLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getDocumentBySlug('README.md');

  return {
    props: { ...post },
  };
};
