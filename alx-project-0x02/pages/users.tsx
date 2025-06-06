import PostCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Users: React.FC<UsersProps[]> = ({ users }) => {
  console.log(users)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">User Content</h1>
        <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts.map(({ name, email, address}: UserProps, key: number) => (
              <UserCard name={name} email={email} address={address}  />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { props: { users }};
}

export default Users;
