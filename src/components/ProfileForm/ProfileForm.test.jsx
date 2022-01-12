import { render } from '@testing-library/react'
import ProfileForm from './ProfileForm'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from '../../context/AuthContext'
import { ProfileProvider } from '../../context/ProfileContext'

jest.mock('../../context/AuthContext')
jest.mock('../../services/users.js')
jest.mock('../../context/ProfileContext')

it('should display the profile form', () => {
    const { container } = render(
        <AuthProvider mockUser={{ id: 123, email: 'test@email.com'}}>
            <ProfileProvider>
             <MemoryRouter>
                <ProfileForm />
            </MemoryRouter>
            </ProfileProvider>
        </AuthProvider>
    )


    expect(container).toMatchSnapshot()
})