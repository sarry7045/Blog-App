import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1"> {label} </label>}
      <Controller
        name={name || "Content"}
        control={control}
        render={({ feild: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount anchor",
              ],
              toolbar:
                "undo redo | blocks | image | formatselect | bold italic underline forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_styleL:
                "body {font-family:Helvetica, Arial, sans-serif; font-size: 14px}",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default RTE;
