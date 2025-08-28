import type { Preview } from '@storybook/nextjs-vite'
import type { Decorator } from '@storybook/react'
import { useForm, FormProvider } from 'react-hook-form'

const withReactHookForm: Decorator = (Story) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form>
        <Story />
      </form>
    </FormProvider>
  )
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [withReactHookForm],
}

export default preview
