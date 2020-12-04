# Runway Web Graphics Engineer Challenge

### Context

At Runway, we're building web-based, interactive tools that enable creators of all kinds to incorporate machine learning models in their creative workflows. Most recently, we have started releasing a series of tools for video creation such as [Green Screen](https://twitter.com/runwayml/status/1328692635037523968), with the aim of speeding up processes in video editing / VFX that have traditionally been time-consuming or required expensive equipment.

Exercise Goal: The goal of this exercise is to build a simple interface, using React and WebGL, for visualizing the results of one image model on an input image or video. 

For example, here are some ideas of interfaces you can make for this challenge:

* Use the [Person Segmentation](https://app.runwayml.com/models/runway/Person-Segmentation) model to extract a mask isolating a person in an image, and create an interface that visualizes removing the background from the person in an input image.
* Use the [MiDaS](https://app.runwayml.com/models/anastasis/MiDaS) depth estimation model to extract a depth layer for an input image, and create an interface to add a [shallow depth of field](https://www.studiobinder.com/blog/what-is-shallow-depth-of-field/) effect.
* Use the [DeOldify](https://app.runwayml.com/models/reiinakano/DeOldify) model to colorize a black & white video, and create an interface to compare the black & white original version with the colorized version.

### Instructions for the exercise

1. [Create an account](https://app.runwayml.com) for Runway.
2. Pick one of the following image-to-image models in Runway:

- [Person Segmentation](https://app.runwayml.com/models/runway/Person-Segmentation)
- [MiDaS](https://app.runwayml.com/models/anastasis/MiDaS)
- [DeOldify](https://app.runwayml.com/models/reiinakano/DeOldify)
- [HiDT](https://app.runwayml.com/models/anastasis/HiDT)
- [MUNIT](https://app.runwayml.com/models/dvsmethid/MUNIT)
- [BDCN](https://app.runwayml.com/models/sree_harsha/BDCN)

3. Pick an demo input image or video for this challenge. [Pexels](https://www.pexels.com/) provides a variety of free images and videos that you can use.
4. Process your image/video using the "Export Images & Videos" functionality in Runway.
5. Create a sandbox development environment in React. We suggest you use [create-react-app](https://github.com/facebook/create-react-app) or [create-react-app with TypeScript](https://create-react-app.dev/docs/adding-typescript/).
6. Copy the original and the output image/video in the repository, and create a simple prototype in React/WebGL that visualizes the difference between the two. Use React to structure the interface and to build any interactive components (it can be a single slider), and WebGL for compositing the frames of the two images/videos.

Please note that there's no need to build a super complex and deeply comprehensive solution. This excercise should not take more than a few hours of work. Instead, we suggest you to develop a proof of concept in React using WebGL, that can help explain your overall solution, technical approach, and the way you thought of organizing the code and project.

## Time-Frame

End of challenge: December 13, 2020

## Delivery

Please submit a PR to this repository when finished.

## License

Please do not post this repo or make it public without Runway's consent.

