package com.webapp.adobe.experience.ds.core.models;


import com.day.cq.dam.api.Asset;
import org.apache.commons.collections.map.MultiValueMap;
import org.apache.commons.collections4.MultiValuedMap;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import javax.jcr.RepositoryException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.TreeMap;

@Model(adaptables = {SlingHttpServletRequest.class,
  Resource.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ImageSizeComponent{

  @SlingObject
  private ResourceResolver resourceResolver;

  @ValueMapValue(name="fileReference", injectionStrategy= InjectionStrategy.OPTIONAL)
  @Default(values="No image")
  private String fileReference;

  @ValueMapValue(name="imageDesktopReference", injectionStrategy= InjectionStrategy.OPTIONAL)
  @Default(values="No image")
  private String imageDesktopReference;

  @ValueMapValue(name="imageMobileReference", injectionStrategy= InjectionStrategy.OPTIONAL)
  @Default(values="No image")
  private String imageMobileReference;

  private Map<String, ImageSizeModel> images;

  @PostConstruct
  public void init() throws IOException, URISyntaxException, RepositoryException {
    images = new HashMap<>();
    updateImageData();
  }

  public String getWidthMobileImage() {
    updateImageData();
    return images.get("mobile").getWidth();
  }

  public String getHeightMobileImage(){
    updateImageData();
    return images.get("mobile").getHeight();
  }

  public String getWidthDesktopImage(){
    updateImageData();
    return images.get("desktop").getWidth();
  }

  public String getHeightDesktopImage(){
    updateImageData();
    return images.get("desktop").getHeight();
  }

  public String getWidthDefaultImage(){
    updateImageData();
    return images.get("default").getWidth();
  }

  public String getHeightDefaultImage(){
    return images.get("default").getHeight();
  }

  private ImageSizeModel imageSizeModelBuilder(String path){
    String width = "0";
    String height = "0";
    ImageSizeModel imageSizeModel = new ImageSizeModel();
    Resource resource = resourceResolver.getResource(path);

    if (Objects.nonNull(resource)) {
      Asset asset = resource.adaptTo(Asset.class);
      if (Objects.nonNull(asset)) {
        width = asset.getMetadataValue("tiff:ImageWidth");
        height = asset.getMetadataValue("tiff:ImageLength");
      }
      imageSizeModel.setFileReference(path);
      imageSizeModel.setHeight(height);
      imageSizeModel.setWidth(width);
    }
    else {
      imageSizeModel.setFileReference(path);
      imageSizeModel.setHeight(height);
      imageSizeModel.setWidth(width);
    }
    return imageSizeModel;
  }

  public void updateImageData(){
    images.put("desktop", imageSizeModelBuilder(imageDesktopReference));
    images.put("mobile", imageSizeModelBuilder(imageMobileReference));
    images.put("default", imageSizeModelBuilder(fileReference));
  }
}

