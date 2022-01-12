import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from '../../context/AuthContext'
import AuthHeader from './AuthHeader'

jest.mock('../../context/AuthContext')
jest.mock('../../services/users.js')

it('should display a header with a sign in/up button when logged out', () => {
    const { container } = render(
        <AuthProvider mockUser={null}>
            <MemoryRouter>
                <AuthHeader />
            </MemoryRouter>
        </AuthProvider>
    )

    expect(container).toMatchSnapshot()

    const signinbtn = screen.getByRole('button', { name: 'Sign In'})
    expect(signinbtn).toBeTruthy()
})

it('should display the user email when signed in', () => {
    const { container } = render(
        <AuthProvider mockUser={{ id: 13243, email: 'test@email.com' }}>
            <MemoryRouter>
                <AuthHeader />
            </MemoryRouter>
        </AuthProvider>
    )

    screen.getByText('test@email.com', { exact: false });
    expect(container).toMatchSnapshot();
})