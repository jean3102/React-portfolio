import { useState } from "react"

function useRandom<T>(array: T[]): [T | null, () => void] {
  if (!Array.isArray(array) || array.length === 0) {
    return [null, () => {}] as const
  }

  const getRandomElement = (): T => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const [randomElement, setRandomElement] = useState<T>(getRandomElement())

  const generateRandomElement = (): void => {
    setRandomElement(getRandomElement())
  }

  return [randomElement, generateRandomElement]
}


export default useRandom