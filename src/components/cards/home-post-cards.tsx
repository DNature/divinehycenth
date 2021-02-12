import React from 'react';

import Link from 'next/link';
import { Box, clsx, Image, Avatar, Badge, Stack } from '@nature-ui/core';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import { Styled } from 'components/nature-jsx-elements';

export const HomePostCards = ({ post, ...rest }) => {
  const {
    slug,
    tags,
    title,
    description,
    imageUrl,
    date,
    author: { githubUrl, websiteUrl, avatarUrl, name },
  } = post;
  const readableDate = format(parseISO(date), 'MMMM dd, yyyy');

  const authorProfile =
    name === 'Divine Hycenth' ? '/about' : websiteUrl || githubUrl || '#';

  return (
    <>
      <Link href={slug}>
        <Box as='a' {...rest} href={slug}>
          <Image
            src={imageUrl}
            alt={title}
            className='rounded-2xl cursor-pointer'
          />
          {tags && (
            <Stack direction='row' spacing='.5rem' className='mt-4'>
              {tags.map((tag, i) => (
                <Badge key={tag + i}>{tag}</Badge>
              ))}
            </Stack>
          )}
          <Styled.h3 className='hover:underline font-semibold cursor-pointer mt-3'>
            {title}
          </Styled.h3>
          <Styled.p className='my-4'>{description}</Styled.p>
          <Link href={authorProfile}>
            <a>
              <Stack
                as='a'
                direction='row'
                spacing='.5rem'
                className='items-center'
              >
                <Avatar src={avatarUrl} alt={name} />
                <Box>
                  <p className='font-medium'>{name}</p>
                  <p className='opacity-60 text-sm'>{readableDate}</p>
                </Box>
              </Stack>
            </a>
          </Link>
        </Box>
      </Link>
    </>
  );
};