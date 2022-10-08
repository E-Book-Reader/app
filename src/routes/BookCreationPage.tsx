import axios from "axios";
import React from "react";
import Button from "../core/components/Button";
import Input from "../core/components/Input";
import Book, { Privacy } from "../core/interfaces/Book";
import BookCard from "../lib/components/BookCard";
import { useMiscContext } from "../lib/contexts/providers/MiscContextProvider";
import withAuthWrapper from "../lib/wrappers/withAuthWrapper";

import TextArea from "../core/components/TextArea";
import FileDrop from "../core/components/FileDrop";
import RadioButtons from "../core/components/RadioButtons";

import {
  LockClosedIcon,
  GlobeAltIcon,
  ArrowUpOnSquareIcon,
} from "@heroicons/react/24/solid";
import SelectLanguage from "../lib/components/SelectLanguage";

const BookCreationPage = withAuthWrapper(({ user }) => {
  const miscContext = useMiscContext();

  const [loading, setLoading] = React.useState(false);
  const [bookLanguage, setBookLanguage] = React.useState<{
    name: string;
    id: string;
  } | null>(null);
  const [bookName, setBookName] = React.useState("");
  const [privacy, setPrivacy] = React.useState<Privacy>(Privacy.PRIVATE);
  const [bookDescription, setBookDescription] = React.useState("");

  const [book, setBook] = React.useState<Book>({
    id: "",
    name: bookName,
    ownerId: user.id,
    privacy: Privacy.PRIVATE,
    description: bookDescription,
    pages: 0,
  });

  React.useEffect(() => {
    setBook({
      id: "",
      name: bookName,
      description: bookDescription,
      ownerId: user.id,
      privacy: Privacy.PRIVATE,
      pages: 0,
    });
  }, [bookName, bookDescription]);

  const [file, setFile] = React.useState<File>();
  const [cover, setCover] = React.useState<File>();

  const handleSubmit = async () => {
    if (!file || !cover) return;
    const formData = new FormData();
    formData.append("book", file);
    formData.append("cover", cover);
    formData.append("language", bookLanguage!.id);
    formData.append("name", bookName);
    formData.append("description", bookDescription);
    formData.append(
      "privacy",
      privacy === Privacy.PRIVATE ? "private" : "public"
    );
    try {
      setLoading(true);

      const response = await axios({
        method: "post",
        url: `http://localhost:8080/users/${user.id}/books`,
        withCredentials: true,
        data: formData,
        /**
         * {
          ...formData,
          language: bookLanguage?.id,
          name: bookName,
          description: bookDescription,
          privacy: privacy === Privacy.PRIVATE ? "private" : "public",
        }
         */
        headers: { "Content-Type": "multipart/form-data" },
        params: {},
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrivacyChange = (selected: number) => {
    switch (selected) {
      case 0:
        setPrivacy(Privacy.PRIVATE);
        break;

      case 1:
        setPrivacy(Privacy.PUBLIC);
        break;
    }
  };

  return (
    <div className="grid grid-cols-2 h-full gap-x-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium">Privacy</div>
          <RadioButtons
            style="col"
            setSelected={handlePrivacyChange}
            selected={privacy === Privacy.PUBLIC ? 1 : 0}
          >
            <div className="flex gap-2 items-center cursor-pointer">
              <LockClosedIcon className="h-5 w-5 fill-inherit" />
              <div className="text-inherit">private</div>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <GlobeAltIcon className="h-5 w-5 fill-inherit" />
              <div className="text-inherit">public</div>
            </div>
          </RadioButtons>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium">Name</div>
          <Input onchange={setBookName} value={bookName} placeholder="name" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium">Description</div>
          <TextArea
            onchange={setBookDescription}
            value={bookDescription}
            placeholder="description"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <div className="text-base font-medium">Pdf-File</div>
            <FileDrop onchange={setFile} accept="application/pdf" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-base font-medium">Book Cover</div>
            <FileDrop onchange={setCover} accept="image/*" />
          </div>
        </div>
        <Button
          onclick={handleSubmit}
          loadingText={"Uploading"}
          loading={loading}
        >
          <div className="flex gap-2">
            <ArrowUpOnSquareIcon className="h-6 w-6" />
            <div>Upload</div>
          </div>
        </Button>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-base font-medium">Preview</div>
          <BookCard type="grid" book={book} />
        </div>
        <div className="flex flex-col gap-2">
          {/**Stylish Select Component With Search And All Languages */}
          <div className="text-base font-medium">Language</div>
          <SelectLanguage setLanguage={setBookLanguage} />
        </div>
      </div>
    </div>
  );
});

export default BookCreationPage;
