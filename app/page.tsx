'use client';

import {
  Alert,
  Button,
  ButtonGroup,
  Center,
  CheckIcon,
  For,
  Heading,
  Text,
  useBoolean,
  VStack,
  XIcon,
} from '@yamada-ui/react';
import { useRef, useState } from 'react';
import { Quiz, quizzes, scores } from './constant';

function randomSort<Y>(array: Y[]) {
  return array.sort(() => 0.5 - Math.random());
}

function getRandomQuizzes(quizzes: Quiz[], count: number) {
  const shuffled = randomSort(quizzes);

  return shuffled.slice(0, count);
}

function generateItems() {
  const low = getRandomQuizzes(quizzes.low, 7);
  const middle = getRandomQuizzes(quizzes.middle, 7);
  const high = getRandomQuizzes(quizzes.high, 6);

  return randomSort([...low, ...middle, ...high]);
}

export default function Page() {
  const [start, startControl] = useBoolean();
  const [end, endControl] = useBoolean();
  const [items, setItems] = useState<Quiz[]>(generateItems());
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const answers = useRef<number[]>([]);
  const last = currentIndex === items.length - 1;

  if (end) {
    const score = answers.current.reduce((prev, id, index) => {
      if (id === items[index]!.answer) prev += 1;

      return prev;
    }, 0);

    const [, label] = Object.entries(scores).find(([num]) => score <= Number(num))!;

    return (
      <>
        <Center
          borderWidth='3px'
          borderColor={
            score >= 16
              ? 'success.emphasized'
              : score >= 8
                ? 'warning.emphasized'
                : 'error.emphasized'
          }
          borderRadius='l3'
          p='md'
          w='full'
          position='sticky'
          top='lg'
          bg='bg'
          zIndex='1'>
          <Heading size='3xl' textAlign='center'>
            あなたは、{label}
          </Heading>
        </Center>

        <For each={answers.current}>
          {(id, index) => {
            const { answer, question, choices } = items[index]!;
            const { label } = choices.find((choice) => choice.id === id)!;
            const correct = id === answer;
            const Icon = correct ? CheckIcon : XIcon;

            return (
              <VStack key={index} w='full' gap='sm'>
                <Text fontWeight='semibold'>{question}</Text>

                <Alert.Root w='full' variant='subtle' status={correct ? 'success' : 'error'}>
                  <Icon boxSize='5' me='3' fontSize='xl' />
                  <Alert.Description>{label}</Alert.Description>
                </Alert.Root>
              </VStack>
            );
          }}
        </For>

        <Button
          position='sticky'
          bottom='lg'
          size='xl'
          onClick={() => {
            answers.current = [];
            setCurrentIndex(0);
            setItems(generateItems());
            endControl.off();
            startControl.on();
          }}>
          やり直す
        </Button>
      </>
    );
  } else if (start) {
    const { choices, question } = items[currentIndex]!;

    return (
      <>
        <Heading size='3xl' textAlign='center'>
          {question}
        </Heading>

        <ButtonGroup.Root orientation='vertical' w='full' align='center' size='xl'>
          <For each={randomSort(choices)}>
            {({ id, label }, index) => (
              <Button
                key={`${currentIndex}-${index}`}
                minW='full'
                _hover={{ bg: 'colorScheme.solid' }}
                onClick={() => {
                  answers.current[currentIndex] = id;

                  if (last) {
                    endControl.on();
                  } else {
                    setCurrentIndex((prev) => prev + 1);
                  }
                }}>
                {label}
              </Button>
            )}
          </For>
        </ButtonGroup.Root>
      </>
    );
  } else {
    return (
      <>
        <Heading size='7xl'>Yamada Quiz</Heading>
        <Button onClick={startControl.on} size='2xl'>
          スタート
        </Button>
      </>
    );
  }
}
