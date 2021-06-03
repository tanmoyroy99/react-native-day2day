import { create } from "apisauce";
import { useContext } from "react";

// const {user}=useContext(AuthContext)
const header = {
    "Content-Type": "application/json",
    "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzAzZWI3ZjYwMmIzOTRiNTExYTY4ZmEiLCJlbWFpbElkIjoidGFucm95OTlAZ21haWwuY29tIiwicGhvbmVObyI6Ijg5NzIzNzk5NTkiLCJpYXQiOjE2MjI2MTMzMTgsImV4cCI6MTYyMjYzMTMxOH0.zdkA_7ZEOpo9JnJU0vVDXyeC5YQfW0N77s7GdAKXHUs"
}

const apiClient = create({
    baseURL: "https://daytoday27081989.herokuapp.com/api",
    headers: header
})

export default apiClient;