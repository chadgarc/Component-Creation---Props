import { useState } from 'react';
import './App.css'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import type { User } from './types';
import { Modal } from './components/Modal/Modal';

function App() {
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'Chris',
      email: 'chris@test.com',
      role: 'Admin',
      avatarUrl: "https://imgs.search.brave.com/XVsGwyF5ZSqjDhzb30HnmVuXb7TScDmItBgyyK1Sroc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Zp/bmFsZmFudGFzeS9p/bWFnZXMvMy8zMi9D/bG91ZF9Qb3J0cmFp/dC5qcGcvcmV2aXNp/b24vbGF0ZXN0L3Nj/YWxlLXRvLXdpZHRo/LWRvd24vMTI5P2Ni/PTIwMDgwOTI2MjE0/MDA0"
    },
    {
      id: '2',
      name: 'Jess',
      email: 'jess@test.com',
      role: 'User',
      avatarUrl: 'https://imgs.search.brave.com/to19tdEQwOZMKjwuzKs7Uc0wEFb2D-QAVwvdkZTidy0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RlYW11c2Vy/Y29udGVudC5jb20v/dWdjLzE4MTc3Njc4/MzE4NDQ3NDgwODcv/RTA4N0UzQkEyMUNF/MjE4QUQ4NzdFRDIz/RDcxMTk2QjI2RTY2/NUUxNi8_aW13PTI2/OCZpbWg9MjY4Jmlt/YT1maXQmaW1wb2xp/Y3k9TGV0dGVyYm94/JmltY29sb3I9IzAw/MDAwMCZsZXR0ZXJi/b3g9dHJ1ZQ'
    },
    {
      id: '3',
      name: 'Ivan',
      email: 'ivan@test.com',
      role: 'User',
      avatarUrl: 'https://imgs.search.brave.com/IVodqUmYCLG_8iea-C-fKqXeuOUDuP-WLM9eiw_CGkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdmF0/YXJmaWxlcy5hbHBo/YWNvZGVycy5jb20v/Mzc3L3RodW1iLTM1/MC0zNzc2OTYud2Vi/cA'
    },
    {
      id: '4',
      name: 'Sebas',
      email: 'sebas@test.com',
      role: 'Guest'
    }
  ])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const handleEdit = (userId: string) => {
    console.log("EDIT CLICKED", userId);
    const user = users.find(user => user.id === userId);
    setSelectedUser(user || null);
    setIsModalOpen(true);
  }

  return (
    <section className='flex flex-col mt-10 gap-5'>
      {users.map( user => {
        let showRole = false;
        if(user.role === 'Admin') showRole = true;
        return <UserProfileCard user={user} showEmail={true} showRole={showRole} onEdit={handleEdit} />
      })}
      <Modal key={selectedUser?.id} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedUser && (
          <>
            <h3>Edit user's name:</h3>
            {/* Input validator from daisy UI */}
            <label className="input validator">
              {/* user icon */}
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              {/* input field, you can choose min and max length here */}
              <input
                type="text"
                required
                placeholder="Username"
                defaultValue={selectedUser.name}
                pattern="[A-Za-z][A-Za-z]*"
                minLength={3}
                maxLength={20}
                title="Only letters, numbers or dash"
              />
            </label>
            <p className="validator-hint">
              Must be 3 to 20 characters
              <br />Letters Only
            </p>

            <h3>Email:</h3>
            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email"
              placeholder="mail@site.com"
              defaultValue={selectedUser.email}
              required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>

            <h3>Role:</h3>
            <input type="text"
            className="input"
            placeholder="User type"
            defaultValue={selectedUser.role}
            list="userTypes" />
            <datalist id="userTypes">
              <option value="Admin"></option>
              <option value="User"></option>
              <option value="Guest"></option>
            </datalist>
          </>
        )}
      </Modal>
    </section>
  )
}

export default App
