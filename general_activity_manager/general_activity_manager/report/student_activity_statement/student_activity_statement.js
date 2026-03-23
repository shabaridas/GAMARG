frappe.query_reports["Student Activity Statement"] = {
	filters: [
		{
			fieldname: "participant_type",
			label: __("Participant Type"),
			fieldtype: "Select",
			options: "\nStudent\nFaculty",
			default: "Student",
		},
		{
			fieldname: "participant",
			label: __("Participant (Name/ID)"),
			fieldtype: "Data",
		},
		{
			fieldname: "department",
			label: __("Department"),
			fieldtype: "Link",
			options: "Department",
		},
		{
			fieldname: "category",
			label: __("Category"),
			fieldtype: "Select",
			options:
				"\nWorkshop\nHackathon\nSeminar\nConference\nFDP\nInternship\nCertification\nOther",
		},
		{
			fieldname: "from_date",
			label: __("Activity From"),
			fieldtype: "Date",
			default: frappe.datetime.year_start(),
		},
		{
			fieldname: "to_date",
			label: __("Activity To"),
			fieldtype: "Date",
			default: frappe.datetime.nowdate(),
		},
	],
};
