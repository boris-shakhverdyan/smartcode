import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Courses from "./pages/Courses/Courses";
import Features from "./pages/Features/Features";
import Staff from "./pages/Staff/Staff";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Login from "./pages/Login/Login";
import RouteMiddleware from "./components/RouteMiddleware/RouteMiddleware";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import { FeaturesList, FeaturesMain } from "./pages/Admin/Features";
import { PartnersList, PartnersMain } from "./pages/Admin/Partners";
import { CoursesList, CoursesMain } from "./pages/Admin/Courses";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:name" element={<CourseInfo />} />
                <Route path="/features" element={<Features />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/about" element={<About />} />

                <Route element={<RouteMiddleware guest />}>
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route element={<RouteMiddleware user />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route element={<RouteMiddleware admin />}>
                    <Route path="/dashboard" element={<Dashboard />}>
                        {/* Courses */}
                        <Route
                            path="/dashboard/courses"
                            element={<CoursesList />}
                        />
                        <Route
                            path="/dashboard/courses/:id"
                            element={<CoursesMain action="update" />}
                        />
                        <Route
                            path="/dashboard/courses/new"
                            element={<CoursesMain action="create" />}
                        />

                        {/* Features */}
                        <Route
                            path="/dashboard/features"
                            element={<FeaturesList />}
                        />
                        <Route
                            path="/dashboard/features/:id"
                            element={<FeaturesMain action="update" />}
                        />
                        <Route
                            path="/dashboard/features/new"
                            element={<FeaturesMain action="create" />}
                        />

                        {/* Partners */}
                        <Route
                            path="/dashboard/partners"
                            element={<PartnersList />}
                        />
                        <Route
                            path="/dashboard/partners/:id"
                            element={<PartnersMain action="update" />}
                        />
                        <Route
                            path="/dashboard/partners/new"
                            element={<PartnersMain action="create" />}
                        />
                    </Route>
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
