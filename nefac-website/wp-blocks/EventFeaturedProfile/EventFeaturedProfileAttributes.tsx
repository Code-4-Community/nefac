export interface EventFeaturedProfileAttributes {
  // this is very dependent on how image uploads are stored with custom blocks; this field may evolve a bit
  // pictures are not required
  imageUrl?: string;

  // the name of who or what is being featured in this profile
  subjectName: string;

  // what the subject is being recognized for (optional)
  recognitionName?: string;

  // subtitle line (e.g. the person's role/position) (optional)
  subjectShortDescription?: string;

  // paragraph description
  subjectLongDescription: string;
}