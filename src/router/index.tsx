import { Navigate, RouteObject } from "react-router-dom";
import Home from "../components/home";
import PoemVisual from "../pages/chinese/PoemVisual";
import About_Author from "../components/about_author";
import Classical_Chinese from "../components/classical_Chinese";
import Write_Essay from "../components/write_essay";
import Layout from "../components/layout";
import Function_Img from "../components/function_img";
import Inequality from "../components/inequality";
import Integral_Analysis from "../components/integral";
import DE from "../components/differential_equation";
import LearnWord from "../components/learn_word";
import Sentence_Analysis from "../components/sentence_analysis";
import Learn_Word from "../components/learn_word";
import Reading_Comprehension from "../components/reading_comprehension";
import Summary_Writing from "../components/summary_writing";

const router: RouteObject[] = [
    {
        path:'/',
        element: <Navigate to='/home'/>
    },
    {
        path:'/home',
        element: <Home />
    },
    {
        path:'/category',
        element: <Layout/>,
        children: [
            {path:'Chinese',element: <Navigate to='/category/Chinese/poem-visual'/>},
            {path:'Chinese/poem-visual',element: <PoemVisual/>},
            {path:'Chinese/about-author',element:<About_Author/>},
            {path:'Chinese/classical-Chinese',element: <Classical_Chinese/>},
            {path:'Chinese/write-essay',element:<Write_Essay/>},
            {path:'math',element: <Navigate to='/category/math/function-image'/>},
            {path:'math/function-image',element: <Function_Img/>},
            {path:'math/inequality',element:<Inequality/>},
            {path:'math/integral-analysis',element: <Integral_Analysis/>},
            {path:'math/differential-equation',element:<DE/>},
            {path:'English',element: <Navigate to='/category/English/learn-word'/>},
            {path:'English/learn-word',element: <Learn_Word/>},
            {path:'English/sentence-analysis',element:<Sentence_Analysis/>},
            {path:'English/reading-comprehension',element: <Reading_Comprehension/>},
            {path:'English/summary-writing',element:<Summary_Writing/>}

        ]
    }, 
]

export default router