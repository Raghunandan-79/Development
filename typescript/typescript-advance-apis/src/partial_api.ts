/* 
    Partial makes all properties of a type optional, creating a type with the 
    same properties, but each marked as optional
*/

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;

type UpdatePropsOptional = Partial<UpdateProps>

const updateUser = (updatedProps: UpdatePropsOptional) => {
    console.log(`Name: ${updatedProps.name}\nAge: ${updatedProps.age}\nEmail: ${updatedProps.email}`)
}

const user: User = {
    id: "111",
    name: "Raghunandan Sharma",
    age: 21,
    email: "test@gmail.com",
    password: "test123"
}

updateUser({
    name: "Raghu"
})