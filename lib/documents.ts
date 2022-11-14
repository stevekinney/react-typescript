import { readFile, readdir, lstat } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { SlowBuffer } from 'buffer';

export const contentDirectory = join(process.cwd(), 'content');

export const getDirectories = async () => {
  const directories: string[] = [];
  const paths = await readdir(contentDirectory);
  for (const path of paths) {
    const fullPath = join(contentDirectory, path);
    const stat = await lstat(fullPath);
    if (stat.isDirectory()) directories.push(path);
  }
  return directories;
};

export const getDocuments = async (directory: string = '') => {
  const fullPath = join(contentDirectory, directory);

  return await readdir(fullPath).then(async (files) => {
    return await Promise.all(
      files
        .filter((file) => file.endsWith('md'))
        .map((file) => getDocumentBySlug(file)),
    );
  });
};

export async function getDocumentBySlug(
  file: string,
): Promise<MarkdownDocument> {
  if (!file.endsWith('.md')) {
    file = `${file}.md`;
  }
  const fullPath = join(contentDirectory, file);
  const fileContents = await readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: file.replace('.md', ''), meta: data, content };
}
