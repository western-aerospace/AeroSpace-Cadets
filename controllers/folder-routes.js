const fs = require("fs");
const path = require("path");

const create = (dir, structure, cb = null) => {
  cb = (cb => (...a) => setTimeout(() => cb.apply(null, a)))(cb);
  const subdirs = Reflect.ownKeys(structure);

  if (subdirs.length) {
    const sub = subdirs[0];
    const pth = path.join(dir, sub);
    const subsub = structure[sub];
    const copy = Object.assign({}, structure);
    delete copy[sub];

    fs.mkdir(pth, err => {
      if (err) return cb(err);
      create(pth, subsub, err => {
        if (err) return cb(err);
        create(dir, copy, cb);
      });
    });
  } else {
    cb(null);
  }
};

const structure = {
  "8110-3": {},
  "CAD FILES": {},
  PDFs: {
    SHEETS: {},
    OBSOLETE: {}
  },
  MANUALS: {},
  "P.Os": {},
  "CUSTOMER PRINTS": {},
  NOTES: {},
  PICTURES: {
    "COMPLETED INSTALLS": {},
    "PRE INSTALLS": {},
    "IN PROGRESS INSTALLS": {},
    MISC: {}
  }
};

create(__dirname, structure, err => {
  if (err) console.log(err);
  else console.log("Success");
});


