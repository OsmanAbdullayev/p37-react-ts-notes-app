import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNote } from "./NoteLayout";
import ReactMarkDown from "react-markdown";

export function Note() {
	const note = useNote();

	return (
		<>
			<Row className="align-items-center mb-4">
				<Col>
					<h1>{note.title}</h1>
					{note.tags.length > 0 && (
						<Stack gap={1} direction="horizontal" className="flex-wrap">
							{note.tags.map((tag) => (
								<Badge className="text-truncate fs-6" key={tag.id}>
									{tag.label}
								</Badge>
							))}
						</Stack>
					)}
				</Col>
				<Col xs="auto">
					<Stack gap={2} direction="horizontal">
						<Link to={`/${note.id}/edit`}>
							<Button variant="primary m-0">Edit</Button>
						</Link>
						<Button variant="outline-danger m-0">Delete</Button>
						<Link to="/">
							<Button variant="outline-secondary m-0">Back</Button>
						</Link>
					</Stack>
				</Col>
			</Row>
			<ReactMarkDown>{note.markdown}</ReactMarkDown>
		</>
	);
}
