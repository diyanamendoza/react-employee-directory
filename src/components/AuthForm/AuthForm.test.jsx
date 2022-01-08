import { render } from '@testing-library/react'
import AuthForm from './AuthForm'

it('should display a form for signing up/in', () => {
    const { container } = render(<AuthForm />);
    expect(container).toMatchSnapshot();
  });
  