package com.devsuperior.dsdeliver.entities;

import java.io.Serializable;
import java.util.Objects;

public class Product implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	private Double price;
	private String description;
	private String iamgeUri;

	public Product() {
	}

	public Product(Long id, String name, Double price, String description, String iamgeUri) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.iamgeUri = iamgeUri;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIamgeUri() {
		return iamgeUri;
	}

	public void setIamgeUri(String iamgeUri) {
		this.iamgeUri = iamgeUri;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		return Objects.equals(id, other.id);
	}

}
