import Calender from "../components/Calender/Calender";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import allConference, { singleConference } from "../data/data";
import Conference from "../components/Conference/Conference";
import Option from "../components/Option/Option";
import SelectedDetails from "../components/SelectedDetails/SelectedDetails";

afterAll(() => {
  cleanup();
});

it("all conference table", () => {
  const { container } = render(<Calender conferences={allConference} />);
  expect(container).toMatchSnapshot();
});

it("single conference", () => {
  const { container } = render(<Conference data={singleConference} />);
  expect(container).toMatchSnapshot();
});

it("single conference details", () => {
  const { container } = render(
    <SelectedDetails
      name={
        singleConference?.organizers?.name ||
        singleConference?.organizers?.location?.name
      }
      about={
        singleConference?.organizers?.about ||
        singleConference?.organizers?.location?.about
      }
      firstName={singleConference?.organizers?.firstName}
      lastName={singleConference?.organizers?.lastName}
      image={singleConference?.organizers?.image?.url}
      day={singleConference?.organizers?.day}
      company={
        singleConference?.organizers?.company ||
        singleConference?.organizers?.location?.city
      }
    />
  );
  expect(container).toMatchSnapshot();
});
