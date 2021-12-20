package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.repositories.OrdertRepository;

@Service
public class OrderService {

	@Autowired
	private OrdertRepository repository;

	@Transactional
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findAll();
		return list.stream().map(order -> new OrderDTO(order)).collect(Collectors.toList());
	}

}
