import React from 'react'
import { IconUpload } from '@tabler/icons-react';
import { ActionIcon, Avatar, Badge, Card, Group, Progress, Text, Image } from '@mantine/core';

const avatars = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
];

export function TaskCard() {
  return (
    <Card  withBorder padding="lg" radius="xl" shadow="xl" >

      <Card.Section>
        <Image
          src="./img/017.png"
          alt="Running challenge"
          height={224}
        />
      </Card.Section>

      <Text fz="lg" fw={500} mt="md">
        5.3 minor release (September 2022)
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
        Form context management, Switch, Grid and Indicator components improvements, new hook and
        10+ other changes
      </Text>

      <Text c="dimmed" fz="sm" mt="md">
        Tasks completed:{' '}
        <Text span fw={500} c="bright">
          23/36
        </Text>
      </Text>

      <Progress value={(23 / 36) * 100} mt={5} />

    </Card>
  );
}