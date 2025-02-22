import { ReactElement } from "react";
import { useOutletContext } from "react-router-dom";
import { IMockContext } from "../interfaces";
import { CourseDetailsStudentsDropdown } from "../components/CourseDetailsStudentsDropdown";

export function StudentCourseCard(): ReactElement {
	const { studentMockData } = useOutletContext<IMockContext>();

	// helper function: get state text from state
	const getModuleStateLabel = (state: string): string => {
		switch (state) {
			case "completed":
				return "Completed";
			case "in-progress":
				return "In Progress";
			case "not-started":
				return "Not Started";
			default:
				return "";
		}
	};

	return (
		<div className="g-card">
			<h2 className="g-card-header">{studentMockData.course.courseName}</h2>
			<p className="g-text-subheading">Your current course</p>
			<h3 className="g-list-item-header">Participants</h3>
			<p className="n-students g-list-item-text">{studentMockData.course.users.length} students enrolled</p>
			<CourseDetailsStudentsDropdown students={studentMockData.course.users} />
			<h3 className="g-list-item-header">Modules</h3>
			<ul className="g-list">
				{studentMockData.course.modules.map((module) => (
					<li key={module.moduleId} className="course-modules-list-item">
						<span className="g-text">{module.moduleName}</span>
						<span className={`g-text ${module.state}`}>
							{getModuleStateLabel(module.state)}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
