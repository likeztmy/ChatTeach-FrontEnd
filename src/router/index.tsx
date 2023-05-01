import { Navigate, RouteObject } from "react-router-dom";
import Home from "../components/home";
import PoemVisual from "../components/PoemVisual";
import AboutAuthor from "../components/about_author";
import ClassicalChinese from "../components/classical_Chinese";
import WriteEssay from "../components/write_essay";
import Layout from "../components/layout";
import FunctionImg from "../components/function_img";
import Inequality from "../components/inequality";
import IntegralAnalysis from "../components/integral";
import DE from "../components/differential_equation";
import SentenceAnalysis from "../components/sentence_analysis";
import LearnWord from "../components/learn_word";
import ReadingComprehension from "../components/reading_comprehension";
import SummaryWriting from "../components/summary_writing";
import Algorithm_Visualization from "../components/algorithm-visualization";
import Code_Refactoring from "../components/code_refactoring";
import Code_Convert from "../components/code_convert";
import Code_Completion from "../components/code_completion";

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
            {path:'Chinese/about-author',element:<AboutAuthor/>},
            {path:'Chinese/classical-Chinese',element: <ClassicalChinese/>},
            {path:'Chinese/write-essay',element:<WriteEssay/>},
            {path:'math',element: <Navigate to='/category/math/function-image'/>},
            {path:'math/function-image',element: <FunctionImg/>},
            {path:'math/inequality',element:<Inequality/>},
            {path:'math/integral-analysis',element: <IntegralAnalysis/>},
            {path:'math/differential-equation',element:<DE/>},
            {path:'English',element: <Navigate to='/category/English/learn-word'/>},
            {path:'English/learn-word',element: <LearnWord/>},
            {path:'English/sentence-analysis',element:<SentenceAnalysis/>},
            {path:'English/reading-comprehension',element: <ReadingComprehension/>},
            {path:'English/summary-writing',element:<SummaryWriting/>},
            {path:'cs',element: <Navigate to='/category/cs/algorithm-visualization' />},
            {path:'cs/algorithm-visualization',element: <Algorithm_Visualization/>},
            {path:'cs/code-refactoring',element: <Code_Refactoring/>},
            {path:'cs/code-convert',element: <Code_Convert/>},
            {path:'cs/code-completion',element: <Code_Completion/>}
        ]
    }, 
]

export default router