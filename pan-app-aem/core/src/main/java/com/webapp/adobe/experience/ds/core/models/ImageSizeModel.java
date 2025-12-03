package com.webapp.adobe.experience.ds.core.models;

public class ImageSizeModel {

  private String fileReference;
  private String width;
  private String height;

  public ImageSizeModel() {
  }

  public String getFileReference() {
    return fileReference;
  }

  public void setFileReference(String fileReference) {
    this.fileReference = fileReference;
  }

  public String getHeight() {
    return height;
  }

  public void setHeight(String height) {
    this.height = height;
  }

  public String getWidth() {
    return width;
  }

  public void setWidth(String width) {
    this.width = width;
  }
}