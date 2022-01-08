import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EmployeeProfile from './EmployeeProfile'

it('should display the provided employee', () => {
    const { container } = render(
        <MemoryRouter>
            <EmployeeProfile employee={{
                name: 'name',
                email: 'email',
                birthday: 'birthday',
                bio: 'bio'
            }} />
        </MemoryRouter>
    )
    
    expect(container).toMatchSnapshot();
   
})