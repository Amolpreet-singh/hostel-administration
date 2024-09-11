import cors from "cors";
import express from "express";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
app.set('view engine', 'jsx');

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "hostel",
    password: "Amol@2002",
    port: 5432,
})
db.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
})
.catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
});
app.get("/",(req,res)=>{
    res.json("dfszgs");
})
app.post("/signUp",(req,res)=>{
    try {
        db.query("insert into userinfo values ($1,$2)",[req.body.value.email,req.body.value.password]);
    } catch (error) {
        console.log(err);
    }
})
app.post("/login", async (req,res) =>{
    try {
        const {email,password}=req.body.value;
        console.log(email,password);
        const result = await db.query("SELECT * FROM userinfo WHERE email = $1 AND password = $2",[email,password]);
        console.log(result.rows);
        if(result.rows.length>=1){
            return res.json("success");
        }
        else{
            return res.json("fail")
        }
    } catch (error) {
        return console.log(error);
    }
})
app.listen(3000,(req,res) =>{
    console.log("listening");
})
    
