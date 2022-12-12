import { NextApiRequest, NextApiResponse } from "next";

type todo={
  name:string;
}

const Todos:todo[]=[
  {
    name:'陸上'
  },
  {
    name:"研究"
  },
  {
    name:"バイト"
  },
  {
    name:"プログラミング"
  },
];

const handlar=(req: NextApiRequest,res: NextApiResponse)=>{
  res.status(200).json(Todos);
}

export default handlar;