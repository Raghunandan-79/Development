/* 
    Pick allows you to create a new type by selecting a set of properties (keys)
    from an existing type (Type)

    Imagine you have a User model with several properties, but for user profile
    display, you only need a subset of these properties
*/

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;

const updateUser = (updatedProps: UpdateProps) => {
    console.log(`Name: ${updatedProps.name}\nAge: ${updatedProps.age}\nEmail: ${updatedProps.email}`)
}

const user: User = {
    id: "111",
    name: "Raghunandan Sharma",
    age: 21,
    email: "test@gmail.com",
    password: "test123"
}

updateUser(user)